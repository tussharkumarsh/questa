import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BloggerService {
  // private API_KEY = 'AIzaSyBlnRTm-KhVsSsCGaFfDJspexeRyLLCZLE';
  // private BLOG_ID = '7596225862661260224';

    private API_KEY = 'AIzaSyA945ajotuQkPF9exL7uhHDyJFGihqJQ1E';
  private BLOG_ID = '1034975854498717882';

  private baseUrl: string = 'https://www.googleapis.com/blogger/v3';

  constructor(private http: HttpClient) { }

  getBlogPosts(): Observable<any[]> {
    const url = `https://www.googleapis.com/blogger/v3/blogs/${this.BLOG_ID}/posts?key=${this.API_KEY}`;
    return this.http.get(url).pipe(
      map((response: any) => response.items || [])
    );
  }

  getPost(postId: string): Observable<any> {
    const url = `${this.baseUrl}/blogs/${this.BLOG_ID}/posts/${postId}?key=${this.API_KEY}`;
    return this.http.get(url);
  }
}
