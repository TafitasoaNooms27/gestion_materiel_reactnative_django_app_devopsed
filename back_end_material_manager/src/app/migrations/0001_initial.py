# Generated by Django 4.2 on 2023-04-23 09:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Produit',
            fields=[
                ('numProduit', models.AutoField(primary_key=True, serialize=False)),
                ('design', models.CharField(max_length=255)),
                ('prix', models.IntegerField()),
                ('quantite', models.IntegerField()),
            ],
        ),
    ]
