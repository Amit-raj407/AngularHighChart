import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Posts } from './models/Posts';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  errorMessage: string = '';
  sub!: Subscription;

  posts: Posts[] = [];

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.sub = this.postService.getPosts().subscribe({
      next: posts => {
        this.posts = posts
      },
      error: err => this.errorMessage = err
    })
  }

}
