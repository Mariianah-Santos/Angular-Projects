import { Component, OnInit } from '@angular/core';

import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../Moment';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons'
import { MessagesService } from '../../../services/messages.service';

import { ComentService } from '../../../services/coment.service';
import { Coment } from '../../../Coment';
import { FormGroup, FormControl, Validators, FormControlDirective, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent implements OnInit {

  moment?: Moment;
  baseApiUrl = environment.baseApiUrl;

  faTimes = faTimes;
  faEdit = faEdit;

  commentForm!: FormGroup;

  constructor(private momentService: MomentService , private activateRouter: ActivatedRoute,
    private messagesService: MessagesService, private router: Router, private commentService: ComentService
  ) {

  }

  ngOnInit(): void {
      const id = Number (this.activateRouter.snapshot.paramMap.get("id"));

      this.momentService.getMoment(id).subscribe((item) => (this.moment = item.data));

      this.commentForm = new FormGroup ({
        text: new FormControl ('', [Validators.required]),
        username: new FormControl('', [Validators.required]),

      });

    }
    get text() {
      return this.commentForm.get('text')!;
    }

    get username() {
      return this.commentForm.get('username')!;
    }

  async removeHandler(id: number) {
    await this.momentService.removeMoment(id).subscribe();

    this.messagesService.add("Momento excluido com sucesso!");
    this.router.navigate(["/"]);
  } 

  async onSubmit(formDirective: FormGroupDirective) {
    if (this.commentForm.invalid) {
      return
    }

    const data: Coment = this.commentForm.value;
    data.momentId = Number(this.moment!.id);

    await this.commentService.createComment(data).subscribe((comment) => {
      this.moment!.comments!.push(comment.data);
      this.messagesService.add("Comentário adicionado com sucesso!");

      this.commentForm.reset();
      formDirective.resetForm();
    });
  }

}
