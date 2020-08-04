import { Component } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredTitle="";
  enteredContent="";


   constructor(public postsService: PostsService){}

  onAddPost(){

    this.postsService.addPost(this.enteredContent, this.enteredTitle);



  }

}
