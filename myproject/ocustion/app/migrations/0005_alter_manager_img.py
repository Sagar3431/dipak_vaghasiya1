# Generated by Django 5.0.7 on 2024-07-18 10:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_alter_manager_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='manager',
            name='img',
            field=models.ImageField(default='media/customer.png', upload_to='media/images'),
        ),
    ]
