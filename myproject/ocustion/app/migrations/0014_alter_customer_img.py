# Generated by Django 5.0.7 on 2024-07-21 09:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0013_alter_customer_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='img',
            field=models.ImageField(default='media/customer.png', upload_to='media/images'),
        ),
    ]