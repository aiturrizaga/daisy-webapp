import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CipherService } from '../services/cipher.service';
import { HttpUrlEncodingCodec } from '@angular/common/http';

interface IHome {
  title: string,
  subtitle: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  start: IHome = {
    title: 'Para ti',
    subtitle: 'Mi Amor'
  }

  constructor(private router: Router,
              private route: ActivatedRoute,
              private cipherService: CipherService) {
  }

  ngOnInit(): void {
    const data = this.route.snapshot.queryParams['data'];

    if (data) {
      const codec: HttpUrlEncodingCodec = new HttpUrlEncodingCodec();
      this.start = this.cipherService.decryptJson(codec.decodeValue(data));
    }
  }

  goFlowerPage() {
    this.router.navigate(['flower']).then();
  }
}
