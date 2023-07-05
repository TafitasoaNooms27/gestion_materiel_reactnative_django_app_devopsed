from rest_framework.decorators import api_view
from rest_framework.response import Response
from app.models import Materiel
from app.serializers import MaterielSerializer
from django.core.exceptions import ValidationError
from django.db.models import Sum

# Create your views here.
@api_view(['GET'])
def allMateriels(r):
	# try:
		materiels = Materiel.objects.all()
		materielsSerializers = MaterielSerializer(materiels, many=True)
		abimes = Materiel.objects.filter(etat='ABIME').aggregate(Sum('quantite'))['quantite__sum']
		bon = Materiel.objects.filter(etat='BON').aggregate(Sum('quantite'))['quantite__sum']
		mauvais = Materiel.objects.filter(etat='MAUVAIS').aggregate(Sum('quantite'))['quantite__sum']
		total = materiels.aggregate(Sum('quantite'))['quantite__sum']
		res = {'materiels': materielsSerializers.data, 'abimes': abimes, 'bon': bon, 'mauvais': mauvais, 'total': total}
	# except:
	# 	res = {'status': 'warning', 'message': 'Une eurreur se materiele lors de la recuperation de donnees'}
		return Response(res)

@api_view(['POST'])
def addMateriel(r):
	try:
		serialisation = MaterielSerializer(data=r.data, many=False)
		res = None
		if serialisation.is_valid():
			serialisation.save()
			res = {'status': 'success', 'data': serialisation.data, 'message': 'Creation d\'un materiel reussi!'}
		else:
			res = {'status': 'error', 'message': 'Entrees invalide'}
	except:
		res = {'status': 'error', 'message': 'Erreur, Veuillez essayer plus tard'}
	return Response(res)

@api_view(['PUT'])
def updateMateriel(r, num):
	try:
		materiel = Materiel.objects.get(numMateriel=num)
		materiel.design = r.data['design']
		materiel.etat = r.data['etat']
		materiel.quantite = r.data['quantite']
		materiel.save()
		res = {'status': 'success', "message": "Mis à jour des infos réussi"}
	except ValidationError:
		res = {'status': 'error', 'message': "Materiel introuvable"}
	except:
		res = {'status': 'error', 'message': 'Erreur, Veuillez essayer plus tard'}
	return Response(res)

@api_view(['DELETE'])
def deleteMateriel(r, num):
	try:
		materiel = Materiel.objects.get(numMateriel=num)
		materiel.delete()
		res = res = {'status': 'success', 'message': 'Suppression d\'un materiel réussi'}
	except ValidationError:
		res = {'status': 'error', 'message': 'materiel introuvable'}
	except:
		res = {'status': 'error', 'message': 'Erreur, Veuillez essayer plus tard'}
	return Response(res)