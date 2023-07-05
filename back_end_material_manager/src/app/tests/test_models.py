# app/tests/test_models.py
from django.test import TestCase
from app.models import Materiel

class TestModels(TestCase):

    def setUp(self):
        self.materiel1 = Materiel.objects.create(
            design='Test Design 1',
            etat='BON',
            quantite=5
        )

    def test_materiel_creation(self):
        self.assertEquals(self.materiel1.design, 'Test Design 1')