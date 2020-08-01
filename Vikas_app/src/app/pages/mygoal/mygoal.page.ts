import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'mygoal',
  templateUrl: './mygoal.page.html',
  styleUrls: ['./mygoal.page.scss'],
})
export class MygoalPage implements OnInit {

  constructor(private ac:AlertController,
    public toastController: ToastController,
    public http: HttpClient,
    public loadingController: LoadingController) {this.getGoalList() }

  ngOnInit() {
  }
  orphanage_name:any=''
  goal:any=''
  duration:any=''
  goal_list=[]
  error_msg=''
  btn='Add'
  edit_index=-1
  reset()
  {
    this.btn="Add"
    this.orphanage_name=''
    this.goal=''
    this.duration=''
  }
  edit(x,index)
  {
    this.orphanage_name=x.orphanage_name
    this.goal=x.goal
    this.duration=x.duration
    this.edit_index=index
    this.btn="Update"
  }
  getGoalList()
  {
    this.http.get('http://localhost:8080/Ankur_ProjectVikas_App/my_goal/get-goal-list.php').subscribe(data=>{
    this.goal_list=<Array<any>>data
    })
  }
  async update()
  {

    const loading = await this.loadingController.create({
      message: 'Updating. Please wait..',
    });
    await loading.present();
    let id=this.goal_list[this.edit_index].id
    //make http request
    let prms:any={orphanage_name:this.orphanage_name,goal:this.goal,duraion:this.duration,id:id}
    this.http.get('http://localhost:8080/Ankur_ProjectVikas_App/my_goal/update-goal.php',{
      params:prms
    }).subscribe(data=>{
      loading.dismiss()
      if(data["status"]==1)
      {
        this.showToast("Updated","secondary")
        this.getGoalList()
        this.reset()
      }else{
        this.showToast("Unable to update.","danger")

      }
    })

  }
  add_update()
  {
    if(this.edit_index!=-1)
    {
this.update()
    }else{
      this.add()
    }
  }

  async add()
  {
    if(this.orphanage_name.length==0)
    {
      this.error_msg="Please enter orphanage name"
      this.showToast("Please enter orphanage name","danger")
    }else if(this.goal.length==0)
    {
      this.error_msg="Please enter your goal"
      this.showToast("Please enter your goal","danger")
    }else if(this.duration.length==0)
    {
      this.error_msg="Please enter the duration"
      this.showToast("Please enter the duration","danger")
    }else{

      const loading = await this.loadingController.create({
        message: 'Saving. Please wait..',
      });
      await loading.present();
  
      //make http request
      let prms:any={orphanage_name:this.orphanage_name,goal:this.goal,duration:this.duration}
      this.http.get('http://localhost:8080/Ankur_ProjectVikas_App/my_goal/add-goal.php',{
        params:prms
      }).subscribe(data=>{
        loading.dismiss()
        if(data["status"]==1)
        {
          this.showToast("Saved","secondary")
          this.getGoalList()
          this.reset()
        }else{
          this.showToast("Unable to save.","danger")

        }
      })

    }
  }
  
  async remove(id)
  {
    const loading = await this.loadingController.create({
      message: 'Deleting. Please wait..',
    });
    await loading.present();

    //make http request
    let prms:any={id:id}
    this.http.get('http://localhost:8080/Ankur_ProjectVikas_App/my_goal/delete-goal.php',{
      params:prms
    }).subscribe(data=>{
      loading.dismiss()
      if(data["status"]==1)
      {
        this.showToast("Deleted","secondary")
        //this.goal_list.splice(index,1)
        this.getGoalList()
      }else{
        this.showToast("Unable to delete.","danger")

      }
    })
  }
  async delete(index)
  {
    const alert = await this.ac.create({
      header: 'Delete',
      message: 'Do you want to delete?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            //console.log('Confirm Okay');
            this.remove(this.goal_list[index].id)
          //
         // this.showToast("Deleted Goal","success")
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async showToast(msg,color)
  {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color:color
    });
    toast.present();
  }
}


