import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CipherService } from '../services/cipher.service';
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { IMessageHeader } from '../interfaces/message.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  start: IMessageHeader = {
    title: 'Para ti',
    subtitle: 'Mi Amor'
  }

  constructor(private router: Router,
              private route: ActivatedRoute,
              private cipherService: CipherService) {
  }

  ngOnInit(): void {
    window.scroll(0, 0);
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
