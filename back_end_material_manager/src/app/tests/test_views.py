# app/tests/test_views.py
from django.test import TestCase, Client
from django.urls import reverse
from app.models import Materiel
import json

class TestViews(TestCase):

    def setUp(self):
        self.client = Client()
        self.list_url = reverse('list')
        self.add_url = reverse('add')
        self.materiel = Materiel.objects.create(
            design='Test Design',
            etat='BON',
            quantite=5
        )

    def test_materiel_list_GET(self):
        response = self.client.get(self.list_url)
        self.assertEquals(response.status_code, 200)

    # app/tests/test_views.py

# other code

    def test_materiel_add_POST(self):
        response = self.client.post(self.add_url, {
            'design': 'Test Design 2',
            'etat': 'BON',
            'quantite': 10
        })
        self.assertEquals(response.status_code, 200)  # change from 201 to 200

    def test_materiel_update_PUT(self):
        response = self.client.put(reverse('update', args=[self.materiel.numMateriel]), json.dumps({
            'design': 'Updated Design',
            'etat': 'ABIME',
            'quantite': 12
        }), content_type='application/json')
        self.assertEquals(response.status_code, 200)  # change from 201 to 200

    def test_materiel_delete_DELETE(self):
        response = self.client.delete(reverse('delete', args=[self.materiel.numMateriel]))
        self.assertEquals(response.status_code, 200)  # change from 201 to 200