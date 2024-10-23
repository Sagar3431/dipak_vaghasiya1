from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import User, Manager, Customer,AllMedia,EventRequest,EventReview
from .utils import *
import random

def home(request):
    if "email" in request.session:
        email=request.session['email']
        uid=User.objects.get(email = email)
        if uid.role=='manager':
             mid = Manager.objects.get(userid=uid)
             context = {'uid': uid, 'mid': mid}
             print("session added")
             return render(request, 'managerpanel/index.html', context)
        else:
             cid = Customer.objects.get(user=uid)
             context = {'uid': uid, 'cid': cid}
             return render(request, 'customerpanel/index.html', context)
    else:
        return render(request, 'login.html')

def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
       
        try:
            uid = User.objects.get(email=email)
            if uid.password == password:
                if uid.role == 'manager':
                    mid = Manager.objects.get(userid=uid)
                    context = {'uid': uid, 'mid': mid}
                    request.session['email'] = email
                    print("session add")
                    return render(request, 'managerpanel/index.html', context)
                elif uid.role == 'customer':
                    cid = Customer.objects.get(user=uid)
                    context = {'uid': uid, 'cid': cid}
                    request.session['email'] = email
                    return render(request, 'customerpanel/index.html', context)
            else:
                e_msg = 'Invalid password'
                return render(request, 'login.html', {'e_msg': e_msg})
        except User.DoesNotExist:
            e_msg = 'Invalid email'
            return render(request, 'login.html', {'e_msg': e_msg})
    else:
        return render(request, 'login.html')

def register(request):
    if request.method == 'POST':
        companyname = request.POST['companyname']
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        
        uid = User.objects.create(email=email, password=password, role='manager')
        if uid:
            mid = Manager.objects.create(userid=uid, username=username, companyname=companyname)
            if mid:
                print("Successfully created account", mid.username)
        return render(request, 'login.html')  # Redirect to login page after successful registration
        
    else:
        return render(request, 'register.html')

def customer_register(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        
        uid = User.objects.create(email=email, password=password, role='customer')
        if uid:
            cid = Customer.objects.create(user=uid, username=username)
            if cid:
                print("Successfully created account", cid.username)
        return render(request, 'login.html') # Redirect to login page after successful registration
        
    else:
        return render(request, 'CustomerRegister.html')

def profile(request):
    if "email" in request.session:
        email = request.session['email']
        if not email:
            return render(request, 'login.html')  # Redirect to login if the session is not set
        
        uid = User.objects.get(email=email)
        if uid.role == 'manager':
            mid = Manager.objects.get(userid=uid)
            context = {'uid': uid, 'mid': mid}
            return render(request, 'managerpanel/profile.html', context)
        elif uid.role == 'customer':
            cid = Customer.objects.get(user=uid)
            context = {'uid': uid, 'cid': cid}
            return render(request, 'customerpanel/c_profile.html', context)
    else:
        return render(request, 'login.html')
    
def logout(request):
        if "email" in request.session:
            del request.session["email"]
        return render(request,"login.html")
        
def c_profile_password(request):   
    try:
       if request.POST:
           uid=User.objects.get(email=request.session['email'])
           if uid.password ==request.POST["currentpassword"]:
               uid.password=request.POST["newpassword"]
               uid.save()
               s_msg='Successfully Password Reset'
               del request.session["email"]
               return render(request,"login.html",{'s_msg':s_msg}) 
           else:
               g_msg='invalid old Password please enter correct password !'
               return render(request,"login.html",{'g_msg':g_msg})  
       else:
            return render(request,"login.html")  
    except:
        return render(request,"login.html")
    

       
def c_profile_update(request):
    if request.method == 'POST':
        try:
            uid = User.objects.get(email=request.session['email'])
            cid = Customer.objects.get(user=uid)
            if cid:
                  cid.first_name=request.POST["first_name"]
                  cid.last_name=request.POST["last_name"]
                  cid.phone_number=request.POST["phone_number"]
                  cid.city=request.POST["city"]
                  cid.address=request.POST["address"]
                  if 'img' in request.FILES:
                      cid.img=request.FILES["img"]
                      cid.save()
                  cid.save()
            return redirect('profile')

        except Exception as e:
            print("Error:", e)
            return redirect('profile')  

    else:
        return redirect('login') 
    
def m_profile_update(request):
    if request.method == 'POST':
        try:
            uid = User.objects.get(email=request.session['email'])
            mid = Manager.objects.get(userid=uid)
            if mid:
                  mid.username=request.POST["username"]
                  mid.companyname=request.POST["companyname"]
                  mid.Company_details=request.POST["Company_details"]
                  mid.company_location=request.POST["company_location"]
                  mid.company_city=request.POST["company_city"]
                  mid.company_address=request.POST["company_address"]
                  mid.contact_number=request.POST["contact_number"]
                  mid.budget_amount=request.POST["budget_amount"]
                  if 'img' in request.FILES:
                      mid.img=request.FILES["img"]
                      mid.save()
                  mid.save()
            return redirect('profile')

        except Exception as e:
            print("Error:", e)
            return redirect('profile')  

    else:
        return redirect('login') 
    
    
def All_event(request):
     try:
         if "email" in request.session:
             e_all=AllMedia.objects.all()
             uid=User.objects.get(email=request.session['email'])
             mid=Manager.objects.get(userid=uid)
             context={
                 'e_all':e_all,
                 'uid':uid,
                 'mid':mid,
             }
             return render(request, 'managerpanel/image-gallery.html', context)
     except Exception as e:
            print("Error:", e)
            return redirect('logout')
     
     
def my_event(request):
     try:
         if "email" in request.session:
             
             uid=User.objects.get(email=request.session['email'])
             mid=Manager.objects.get(userid=uid)
             e_all=AllMedia.objects.filter(userid=uid)
             context={
                 'e_all':e_all,
                 'uid':uid,
                 'mid':mid,
             }
             return render(request, 'managerpanel/image-gallery-my.html', context)
     except Exception as e:
            print("Error:", e)
            return redirect('logout')
        
        
def add_event(request):

    if "email" in request.session:
        if request.POST:     
            uid=User.objects.get(email=request.session['email'])
            mid=Manager.objects.get(userid=uid)
            event_title=request.POST['event_title']
            if "img" in request.FILES and "videofile" in request.FILES:
                img=request.FILES['img']
                videofile=request.FILES['videofile']
                
            if "videofile" in request.FILES:
                videofile=request.FILES['videofile']
                
            eid=AllMedia.objects.create(userid=uid,event_title=event_title,img=img,videofile=videofile)
            if eid:
                context={
                        'uid':uid,
                        'mid':mid,
                        's_msg':"successfully media added"
                }
                return render(request, 'managerpanel/add-media.html', context)
        else:
            uid=User.objects.get(email=request.session['email'])
            mid=Manager.objects.get(userid=uid)
            context={
                        'uid':uid,
                        'mid':mid,
                }
            return render(request, 'managerpanel/add-media.html', context)
        

def my_all_video(request):
     try:
         if "email" in request.session:
             e_all=AllMedia.objects.all()
             uid=User.objects.get(email=request.session['email'])
             mid=Manager.objects.get(userid=uid)
             context={
                 'e_all':e_all,
                 'uid':uid,
                 'mid':mid,
             }
             return render(request, 'managerpanel/video-gallery-all.html', context)
     except Exception as e:
            print("Error:", e)
            return redirect('logout')
        
def video_gallery_my(request):
    try:
         if "email" in request.session:
             
             uid=User.objects.get(email=request.session['email'])
             mid=Manager.objects.get(userid=uid)
             e_all=AllMedia.objects.filter(userid=uid)
             context={
                 'e_all':e_all,
                 'uid':uid,
                 'mid':mid,
             }
             return render(request, 'managerpanel/video-gallery-my.html', context)
    except Exception as e:
            print("Error:", e)
            return redirect('logout')
        
def c_All_event(request):
     try:
         if "email" in request.session:
             e_all=AllMedia.objects.all()
             uid=User.objects.get(email=request.session['email'])
             cid=Customer.objects.get(user=uid)
             context={
                 'e_all':e_all,
                 'uid':uid,
                 'cid':cid,
             }
             return render(request, 'customerpanel/c-image-gallery.html', context)
     except Exception as e:
            print("Error:", e)
            return redirect('logout')
        
def c_my_event(request):
     try:
         if "email" in request.session:
             
             uid=User.objects.get(email=request.session['email'])
             cid=Customer.objects.get(user=uid)
             e_all=AllMedia.objects.filter(userid=uid)
             context={
                 'e_all':e_all,
                 'uid':uid,
                 'cid':cid,
             }
             return render(request, 'customerpanel/c-image-gallery-my.html', context)
     except Exception as e:
            print("Error:", e)
            return redirect('logout')
        
def c_my_all_video(request):
     try:
         if "email" in request.session:
             e_all=AllMedia.objects.all()
             uid=User.objects.get(email=request.session['email'])
             cid=Customer.objects.get(user=uid)
             context={
                 'e_all':e_all,
                 'uid':uid,
                 'cid':cid,
             }
             return render(request, 'customerpanel/c-video-gallery-all.html', context)
     except Exception as e:
            print("Error:", e)
            return redirect('logout')
        
def c_video_gallery_my(request):
    try:
         if "email" in request.session:
             
             uid=User.objects.get(email=request.session['email'])
             cid=Customer.objects.get(user=uid)
             e_all=AllMedia.objects.filter(userid=uid)
             context={
                 'e_all':e_all,
                 'uid':uid,
                 'cid':cid,
             }
             return render(request, 'customerpanel/c-video-gallery-my.html', context)
    except Exception as e:
            print("Error:", e)
            return redirect('logout')
    
def c_add_event(request):

    if "email" in request.session:
        if request.POST:     
            uid=User.objects.get(email=request.session['email'])
            cid=Customer.objects.get(user=uid)
            event_title=request.POST['event_title']
            if "img" in request.FILES and "videofile" in request.FILES:
                img=request.FILES['img']
                videofile=request.FILES['videofile']
                
            if "videofile" in request.FILES:
                videofile=request.FILES['videofile']
                
            eid=AllMedia.objects.create(userid=uid,event_title=event_title,img=img,videofile=videofile)
            if eid:
                context={
                        'uid':uid,
                        'cid':cid,
                        's_msg':"successfully media added"
                }
                return render(request, 'customerpanel/c-add-media.html', context)
        else:
            uid=User.objects.get(email=request.session['email'])
            cid=Customer.objects.get(user=uid)
            context={
                        'uid':uid,
                        'cid':cid,
                }
            return render(request, 'customerpanel/c-add-media.html', context)
        
def all_managers(request):
    try:
         if "email" in request.session:
             
             uid=User.objects.get(email=request.session['email'])
             cid=Customer.objects.get(user=uid)
             mall=Manager.objects.all()
             context={
                 'mall':mall,
                 'uid':uid,
                 'cid':cid,
             }
             return render(request, 'customerpanel/all-managers.html', context)
    except Exception as e:
            print("Error:", e)
            return redirect('logout')
        
def specific_view_managers(request,pk):
    try:
         if "email" in request.session:
             
             uid=User.objects.get(email=request.session['email'])
             cid=Customer.objects.get(user=uid)
             mid=Manager.objects.get(id=pk)
             context={
                 'mid':mid,
                 'uid':uid,
                 'cid':cid,
             }
             return render(request, 'customerpanel/specific-manager-profile.html', context)
    except Exception as e:
            print("Error:", e)
            return redirect('logout')
        
def book_event_request(request,pk):
    try:
         if "email" in request.session:
             
             uid=User.objects.get(email=request.session['email'])
             cid=Customer.objects.get(user=uid)
             mid=Manager.objects.get(id=pk)
             context={
                 'mid':mid,
                 'uid':uid,
                 'cid':cid,
             }
             return render(request, 'customerpanel/create-event.html', context)
    except Exception as e:
            print("Error:", e)
            return redirect('logout')
        
def book_event_request_logic(request):
    try:
         if "email" in request.session:
            if request.POST:
                uid=User.objects.get(email=request.session['email'])
                cid=Customer.objects.get(user=uid)
                mid_html=request.POST['mid']
                print("--------->>>",mid_html)
                mid=Manager.objects.get(id=mid_html)
                print("------->>>",mid)
                print("------->>>",cid)
                
                event_catagory=request.POST['event_catagory']
                description=request.POST['description']
                date=request.POST['date']
                time=request.POST['time']
                venue=request.POST['venue']
                expected_persons=request.POST['expected_persons']
                expected_price=request.POST['expected_price']
                payment_mode=request.POST['payment_mode']
                
                event_id=EventRequest.objects.create(
                                                        customer_userid=cid,
                                                        manager_userid=mid,
                                                        event_catagory=event_catagory,
                                                        description=description,
                                                        date=date,
                                                        time=time,
                                                        venue=venue,
                                                        expected_persons=expected_persons,
                                                        expected_price=expected_price,
                                                        payment_mode=payment_mode,
                                                        event_conformation_status='pending'
                                                      
                                                    )
                
                context={
                    'mid':mid,
                    'uid':uid,
                    'cid':cid,
                }
                return render(request, 'customerpanel/create-event.html', context)
    except Exception as e:
            print("Error:", e)
            return redirect('logout')
        
def event_request(request):
    try:
         if "email" in request.session:
            
            uid=User.objects.get(email=request.session['email'])
            mid=Manager.objects.get(userid=uid)
            e_all=EventRequest.objects.filter(manager_userid=mid)
            print("---->>",e_all)
            
            context={
                'mid':mid,
                'uid':uid,
                'e_all':e_all,
                
            }
            return render(request, 'managerpanel/all-request.html', context)
    except Exception as e:
            print("Error:", e)
            return redirect('logout')
        
def approve_event_request(request,pk):
    try:
         if "email" in request.session:
            
            uid=User.objects.get(email=request.session['email'])
            mid=Manager.objects.get(userid=uid)
            e_all=EventRequest.objects.filter(manager_userid=mid)
            eventid=EventRequest.objects.get(id=pk)
            eventid.event_conformation_status='Approve'
            eventid.save()
            print("---->>",e_all)
            
            context={
                'mid':mid,
                'uid':uid,
                'e_all':e_all,
                
            }
            return render(request, 'managerpanel/all-request.html', context)
    except Exception as e:
            print("Error:", e)
            return redirect('logout')

def reject_event_request(request,pk):
    try:
         if "email" in request.session:
            
            uid=User.objects.get(email=request.session['email'])
            mid=Manager.objects.get(userid=uid)
            e_all=EventRequest.objects.filter(manager_userid=mid)
            eventid=EventRequest.objects.get(id=pk)
            eventid.event_conformation_status='Reject'
            eventid.save()
            print("---->>",e_all)
            
            context={
                'mid':mid,
                'uid':uid,
                'e_all':e_all,
                
            }
            return render(request, 'managerpanel/all-request.html', context)
    except Exception as e:
            print("Error:", e)
            return redirect('logout')
        
def forgot_password(requset):
    if requset.POST:
        email=requset.POST['email']
        uid=User.objects.get(email=email)
        otp=random.randint(1111,9999)
        uid.otp=otp
        uid.save()
        sendmail("Forgot password","email",email,{"otp":otp})
        return render(requset, 'reset-password.html',{"email":email})
    else:
        return render(requset, 'forgot-password.html')

def reset_password(requset):
    if requset.POST:
        email=requset.POST['email']
        otp=requset.POST["otp"]
        newpassword=requset.POST["newpassword"]
        conformpassword=requset.POST["conformpassword"]
        uid=User.objects.get(email=email)
        if str(uid.otp)==otp and newpassword==conformpassword:
            uid.password=newpassword
            uid.save()
            return redirect('login')
        else:
            pass
    else:
        pass
            
            
def give_review(request,pk):
    try:
         if "email" in request.session:
             
             uid=User.objects.get(email=request.session['email'])
             cid=Customer.objects.get(user=uid)
             mid=Manager.objects.get(id=pk)
             context={
                 'mid':mid,
                 'uid':uid,
                 'cid':cid,
             }
             return render(request, 'customerpanel/give-review.html', context)
    except Exception as e:
            print("Error:", e)
            return redirect('logout')
        
        
def give_review_logic(request):
    try:
         if "email" in request.session:
            if request.POST:
                uid=User.objects.get(email=request.session['email'])
                cid=Customer.objects.get(user=uid)
                mid_html=request.POST['mid']
                print("--------->>>",mid_html)
                mid=Manager.objects.get(id=mid_html)
                print("------->>>",mid)
                print("------->>>",cid)
                
                review=request.POST['review']
                discription=request.POST['discription']
                event_id=EventReview.objects.create(
                                                        customer_userid=cid,
                                                        manager_userid=mid,
                                                        review=review,
                                                        discription=discription,

                                                    )
                
                context={
                    'mid':mid,
                    'uid':uid,
                    'cid':cid,
                }
                return render(request, 'customerpanel/give-review.html', context)
    except Exception as e:
            print("Error:", e)
            return redirect('logout')
        
def all_review(request):
    try:
         if "email" in request.session:
            
            uid=User.objects.get(email=request.session['email'])
            cid=Customer.objects.get(user=uid)
            e_all=EventReview.objects.all()
            
            context={
                'cid':cid,
                'uid':uid,
                'e_all':e_all,
                
            }
            return render(request, 'customerpanel/all-review.html', context)
    except Exception as e:
            print("Error:", e)
            return redirect('logout')
        
        
def c_my_review(request):
     try:
         if "email" in request.session:
             uid=User.objects.get(email=request.session['email'])
             cid=Customer.objects.get(user=uid)
             e_all=EventReview.objects.filter(customer_userid=cid)
             context={
                 'e_all':e_all,
                 'uid':uid,
                 'cid':cid,
             }
             return render(request, 'customerpanel/c-my-review.html', context)
     except Exception as e:
            print("Error:", e)
            return redirect('logout')

