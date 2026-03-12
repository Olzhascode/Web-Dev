import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album';
import { Album } from '../../models';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = true;
  saving = false;
  saved = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => { this.album = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  saveAlbum(): void {
    if (!this.album) return;
    this.saving = true;
    this.albumService.updateAlbum(this.album).subscribe({
      next: () => { this.saving = false; this.saved = true; setTimeout(() => this.saved = false, 2500); },
      error: () => { this.saving = false; }
    });
  }

  viewPhotos(): void {
    if (this.album) this.router.navigate(['/albums', this.album.id, 'photos']);
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
