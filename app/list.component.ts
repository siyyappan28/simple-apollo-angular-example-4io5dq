import { Component, OnInit } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Post, Query } from "./types";

@Component({
  selector: "app-list",
  template: `
    <ul>
      <li *ngFor="let post of (posts | async)">
        {{ post.Id }}
        {{ post.Name }}         
      </li>
    </ul>
  `
})
export class ListComponent implements OnInit {
  posts: Observable<Post[]>;
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.posts = this.apollo
      .watchQuery<Query>({
        query: gql`
          query Employee {
            Employee {
              Id
              Name
              salary              
            }
          }
        `
      })
      .valueChanges.pipe(map(result => result.data.Employee));
  }
}
