# Generated by Django 3.0.4 on 2021-11-14 20:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='city',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='contact',
            name='phone',
            field=models.IntegerField(blank=True, default=123456),
        ),
        migrations.AddField(
            model_name='contact',
            name='property',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
