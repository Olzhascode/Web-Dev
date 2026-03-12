import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Album } from '../../models';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  deletingId: number | null = null;

  constructor(private albumService: AlbumService, private router: Router) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => { this.albums = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  navigateToAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number, event: Event): void {
    event.stopPropagation();
    this.deletingId = id;
    this.albumService.deleteAlbum(id).subscribe({
      next: () => { this.albums = this.albums.filter(a => a.id !== id); this.deletingId = null; },
      error: () => { this.deletingId = null; }
    });
  }
}
