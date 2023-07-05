from django.db import models

# Create your models here.
class Materiel(models.Model):
	numMateriel = models.AutoField(primary_key=True)
	design = models.CharField(max_length=255)
	etat = models.CharField(max_length=255)
	quantite = models.IntegerField()
