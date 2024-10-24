# Generated by Django 5.0.7 on 2024-07-18 10:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_alter_user_created_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='manager',
            name='img',
            field=models.ImageField(default='media/customer.png', upload_to='media/images'),
        ),
        migrations.AlterField(
            model_name='manager',
            name='Company_details',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='manager',
            name='company_address',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='manager',
            name='company_city',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='manager',
            name='company_location',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='manager',
            name='contact_number',
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
    ]
