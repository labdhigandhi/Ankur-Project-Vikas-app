import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'training-diary',
  templateUrl: './training-diary.page.html',
  styleUrls: ['./training-diary.page.scss'],
})
export class TrainingDiaryPage implements OnInit {

  isNote:boolean = false;
  iconstring:string = 'add';

  title:any=''
  note:any=''
  note_list=[];
  error_msg=''
  btn='Add'
  edit_index=-1

  

  constructor(public router: Router,private ac:AlertController,
    public toastController: ToastController,
    public http: HttpClient,
    public loadingController: LoadingController) { 
    this.getNoteList() 
  }

  ngOnInit() {
  }

  reset()
  {
    this.btn="Add"
    this.title=''
    this.note=''
  }
  edit(x,index)
  {
    this.title=x.title
    this.note=x.note
    this.edit_index=index
    this.btn="Update"
    this.showHide()
  }
  getNoteList()
  {
    this.http.get('http://localhost:8080/Ankur_ProjectVikas_App/my_diary/get-note-list.php').subscribe(data=>{
    this.note_list=<Array<any>>data
    })
  }
  async update()
  {
    const loading = await this.loadingController.create({
      message: 'Updating. Please wait..',
    });
    await loading.present();
    let id=this.note_list[this.edit_index].id
    //make http request
    let prms:any={title:this.title,note:this.note,id:id}
    this.showHide()
    this.http.get('http://localhost:8080/Ankur_ProjectVikas_App/my_diary/update-note.php',{
      params:prms
    }).subscribe(data=>{
      loading.dismiss()
      if(data["status"]==1)
      {
        this.showToast("Updated","secondary")
        this.getNoteList()
        this.reset()
        this.isNote = false;
        this.iconstring = 'add';
        this.router.navigate(['/app/tabs/main']);
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
    if(this.title.length==0)
    {
      this.error_msg="Please enter title"
      this.showToast("Please enter title","danger")
    }else if(this.note.length==0)
    {
      this.error_msg="Please enter your note"
      this.showToast("Please enter your note","danger")
    }else{

      const loading = await this.loadingController.create({
        message: 'Saving. Please wait..',
      });
      await loading.present();
  
      //make http request
      let prms:any={title:this.title,note:this.note}
      this.http.get('http://localhost:8080/Ankur_ProjectVikas_App/my_diary/add-note.php',{
        params:prms
      }).subscribe(data=>{
        loading.dismiss()
        if(data["status"]==1)
        {
          this.showToast("Saved","secondary")
          this.getNoteList()
          this.reset()
          this.isNote = false;
          this.iconstring = 'add';
          this.router.navigate(['/app/tabs/main']);
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
    this.http.get('http://localhost:8080/Ankur_ProjectVikas_App/my_diary/delete-note.php',{
      params:prms
    }).subscribe(data=>{
      loading.dismiss()
      if(data["status"]==1)
      {
        this.showToast("Deleted","secondary")
        //this.note_list.splice(index,1)
        this.getNoteList()
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
            this.remove(this.note_list[index].id)
          //
         // this.showToast("Deleted Note","success")
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

  showHide(){
    if(this.isNote == false){
      this.isNote = true;
      this.iconstring = 'close';
    }else{
      this.isNote = false;
      this.iconstring = 'add';
    }}
}
