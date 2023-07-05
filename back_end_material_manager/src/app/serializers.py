from rest_framework import serializers
from app.models import Materiel

class MaterielSerializer(serializers.ModelSerializer):
	class Meta:
		model = Materiel
		fields = '__all__'