from django.test import SimpleTestCase 
from django.urls import reverse, resolve 
from app.views import allMateriels, addMateriel, updateMateriel, deleteMateriel

class TestUrls (SimpleTestCase):

        def test_list_url_is_resolved(self):
            url = reverse('list')
            print(resolve(url))
            self.assertEquals(resolve(url).func, allMateriels)
        
        def test_add_url_is_resolved(self):
            url = reverse('add')
            print(resolve(url))
            self.assertEquals(resolve(url).func, addMateriel)

        def test_update_url_is_resolved(self):
            url = reverse('update', args=['num'])
            print(resolve(url))
            self.assertEquals(resolve(url).func, updateMateriel)

        def test_delete_url_is_resolved(self):
            url = reverse('delete', args=['num'])
            print(resolve(url))
            self.assertEquals(resolve(url).func, deleteMateriel)