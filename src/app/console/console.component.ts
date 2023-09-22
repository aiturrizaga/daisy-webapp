import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CipherService } from '../services/cipher.service';
import { HttpUrlEncodingCodec } from '@angular/common/http';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

  form: FormGroup = new FormGroup<any>('');
  encryptMessage: string = '';

  constructor(private fb: FormBuilder,
              private cipherService: CipherService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.max(50)]],
      subtitle: ['', [Validators.required, Validators.max(30)]]
    });
  }

  sendGift() {
    console.log('Form: ', this.form.value);
    const encrypt = this.cipherService.encryptJson(this.form.value);
    console.log('Encrypt: ', encrypt)
    console.log('Decrypt: ', this.cipherService.decryptJson(encrypt))

    const codec = new HttpUrlEncodingCodec();
    console.log('Codec: ', codec.encodeValue(encrypt));
  }

}
