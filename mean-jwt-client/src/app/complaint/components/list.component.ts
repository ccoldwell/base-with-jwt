import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { ComplaintService } from '@_services';

import { Complaint } from '@_models';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    complaints!: Complaint[];

    constructor(private complaintService: ComplaintService) {}

    ngOnInit() {
        this.complaintService.getAll()
            .pipe(first())
            .subscribe(complaints => this.complaints = complaints);
    }

    deleteComplaint(id: any) {
        const complaint = this.complaints.find(x => x._id === id);
        if (!complaint) return;

        complaint.isDeleting = true;
        this.complaintService.delete(id)
            .pipe(first())
            .subscribe(() => this.complaints = this.complaints.filter(x => x._id !== id));
    }
}
