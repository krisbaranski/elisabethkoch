import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../../../app/blog.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
  standalone: false,
})
export class PostsComponent implements OnInit {
  blogPosts: any;
  id!: string;
  errorMessage: any;

  constructor(
    private blogService: BlogService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.spinner.show();

    this.blogService.getPosts().subscribe(
      (data) => {
        this.blogPosts = data;
        console.log(this.blogPosts);
        this.spinner.hide();
      },
      (error) => {
        // if any error, Code throws the error
        this.errorMessage = error.error.message;
        console.log(error.error.message, 'error');
        this.spinner.hide();
      }
    );
  }
}
