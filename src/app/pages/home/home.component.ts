import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  readmore = false

  currentTab = ''

  recentProjects = [
    {
      id: 123,
      name: 'Project ABC',
      image: 'https://picsum.photos/id/1/200/300',
    },
    {
      id: 234,
      name: 'Project XYZ',
      image: 'https://picsum.photos/id/2/200/300',
    },
    {
      id: 345,
      name: 'Project QWE',
      image: 'https://picsum.photos/id/3/200/300',
    }
  ]

  testimonials = [
    {
      author: 'Crisos Rusos',
      title: 'Awesome work',
      content: 'Pocałuj mikołaja w dupsko',
      image: 'https://i.imgur.com/h2E4WGw.jpg',
      rating: 2.5
    },
    {
      author: 'Bella Pindolla',
      title: 'Nice work',
      content: 'Mikołaj to zboczeniec',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 4
    }
  ]
}
