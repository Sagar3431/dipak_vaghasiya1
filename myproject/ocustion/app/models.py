from django.db import models
from django.conf import settings

# Create your models here.

class User(models.Model):
    email=models.EmailField(max_length=50,unique=True)
    password=models.CharField(max_length=30)
    otp=models.IntegerField(default=456)
    role=models.CharField(max_length=10)
    created_at=models.DateTimeField(auto_now=True)
    is_login=models.BooleanField(default=False)
    is_active=models.BooleanField(default=False)
    def __str__(self) -> str:
        return self.email 
    
class Manager(models.Model):
    userid=models.ForeignKey(User,on_delete=models.CASCADE)
    username=models.CharField(max_length=30,null=True,blank=True)
    companyname=models.CharField(max_length=30)
    Company_details=models.TextField(blank=True,null=True)
    company_location=models.CharField(max_length=30,blank=True,null=True)
    company_city=models.CharField(max_length=30,blank=True,null=True)
    company_address=models.TextField(blank=True,null=True)
    contact_number=models.CharField(max_length=15,blank=True,null=True)
    event_specialization=models.TextField()
    catering_availble=models.BooleanField(default=False)
    budget_amount=models.CharField(max_length=50)
    img=models.FileField(upload_to='media/images',default='media/customer.png')
    def __str__(self) -> str:
        return self.username +" - "+ self.companyname
    
class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=30, null=True, blank=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)  
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    city = models.CharField(max_length=30, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    img = models.FileField(upload_to='media/images', default='media/customer.png')

    def __str__(self):
        return f" name : {self.username} email : {self.email}"
    
class AllMedia(models.Model):
    userid = models.ForeignKey(User, on_delete=models.CASCADE)
    event_title = models.CharField(max_length=50)
    img = models.FileField(upload_to="media/eventpic", default="media/eventpic/ev1.jpg")
    videofile = models.FileField(upload_to="media/videos", null=True, blank=True, verbose_name="")
    created_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f" Title : {self.event_title}"
    
class EventRequest(models.Model):
    customer_userid=models.ForeignKey(Customer,on_delete=models.CASCADE)
    manager_userid=models.ForeignKey(Manager,on_delete=models.CASCADE)
    event_catagory=models.CharField(max_length=50)
    description=models.TextField()
    date=models.CharField(max_length=10)
    time=models.CharField(max_length=10)
    venue=models.CharField(max_length=100,null=True,blank=True)
    expected_persons=models.CharField(max_length=10)
    event_conformation_status=models.CharField(default="pending",max_length=15)
    expected_price=models.CharField(max_length=30,null=True,blank=True)
    payment_mode=models.CharField(max_length=10,null=True,blank=True)
    
    def __str__(self):
        return f"catagory {self.event_catagory} by {self.customer_userid.first_name}"
    
class EventReview(models.Model):
    customer_userid=models.ForeignKey(Customer,on_delete=models.CASCADE)
    manager_userid=models.ForeignKey(Manager,on_delete=models.CASCADE)
    review=models.CharField(max_length=30,null=True,blank=True)
    discription=models.CharField(max_length=100,null=True,blank=True)
    
    
    
    

