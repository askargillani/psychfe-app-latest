import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-refer-patient',
  standalone: true,
  imports: [CommonModule, FormsModule, CtaComponent],
  templateUrl: './refer-patient.component.html',
  styleUrls: ['./refer-patient.component.scss']
})
export class ReferPatientComponent {
  private http = inject(HttpClient);

  showValidationErrors = false;
  validationErrors: { [key: string]: string } = {};
  successMessage = false;
  isSubmitting = false;

  requiredFields = [
    'patient-name',
    'dob',
    'phone',
    'provider-name',
    'practice-name',
    'provider-phone',
    'provider-email',
    'referral-reason',
    'insurance-provider',
    'policy-holder'
  ];

  fieldLabels: { [key: string]: string } = {
    'patient-name': "Patient's Full Name",
    'dob': 'Date of Birth',
    'phone': 'Phone Number',
    'provider-name': "Referring Provider's Name",
    'practice-name': 'Practice/Clinic Name',
    'provider-phone': 'Provider Phone Number',
    'provider-email': 'Provider Email Address',
    'referral-reason': 'Reason for Referral',
    'insurance-provider': 'Insurance Provider',
    'policy-holder': "Policy Holder's Name"
  };

  onSubmit(form: HTMLFormElement): void {
    this.validationErrors = {};

    // Check required fields
    this.requiredFields.forEach(fieldId => {
      const input = document.getElementById(fieldId) as HTMLInputElement | HTMLTextAreaElement;
      if (input && !input.value.trim()) {
        this.validationErrors[fieldId] = `${this.fieldLabels[fieldId]} is required`;
      }
    });

    // Email validation
    const emailInput = document.getElementById('provider-email') as HTMLInputElement;
    if (emailInput && emailInput.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        this.validationErrors['provider-email'] = 'Please enter a valid email address';
      }
    }

    // Patient email validation (if provided)
    const patientEmailInput = document.getElementById('email') as HTMLInputElement;
    if (patientEmailInput && patientEmailInput.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(patientEmailInput.value)) {
        this.validationErrors['email'] = 'Please enter a valid email address';
      }
    }

    // Phone validation
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    if (phoneInput && phoneInput.value.trim()) {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!phoneRegex.test(phoneInput.value) || phoneInput.value.replace(/\D/g, '').length < 10) {
        this.validationErrors['phone'] = 'Please enter a valid phone number';
      }
    }

    // Provider phone validation
    const providerPhoneInput = document.getElementById('provider-phone') as HTMLInputElement;
    if (providerPhoneInput && providerPhoneInput.value.trim()) {
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      if (!phoneRegex.test(providerPhoneInput.value) || providerPhoneInput.value.replace(/\D/g, '').length < 10) {
        this.validationErrors['provider-phone'] = 'Please enter a valid phone number';
      }
    }

    // Date validation (basic format check)
    const dobInput = document.getElementById('dob') as HTMLInputElement;
    if (dobInput && dobInput.value.trim()) {
      const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
      if (!dateRegex.test(dobInput.value)) {
        this.validationErrors['dob'] = 'Please enter date in MM/DD/YYYY format';
      }
    }

    // If no errors, submit the form and reset
    if (Object.keys(this.validationErrors).length === 0) {
      this.submitFormToServer(form);
    }
  }

  private submitFormToServer(form: HTMLFormElement): void {
    this.isSubmitting = true;

    // Collect form data
    const formData = {
      patientsFullName: (document.getElementById('patient-name') as HTMLInputElement).value,
      dateOfBirth: (document.getElementById('dob') as HTMLInputElement).value,
      phoneNumber: (document.getElementById('phone') as HTMLInputElement).value,
      emailAddress: (document.getElementById('email') as HTMLInputElement).value || '',
      language: (document.getElementById('language') as HTMLInputElement).value || '',
      referringProvidersName: (document.getElementById('provider-name') as HTMLInputElement).value,
      practiceClinicName: (document.getElementById('practice-name') as HTMLInputElement).value,
      reasonForReferral: (document.getElementById('referral-reason') as HTMLTextAreaElement).value,
      insuranceProvider: (document.getElementById('insurance-provider') as HTMLInputElement).value,
      policyHoldersName: (document.getElementById('policy-holder') as HTMLInputElement).value,
      policyNumber: (document.getElementById('policy-number') as HTMLInputElement).value || '',
      groupNumber: (document.getElementById('group-number') as HTMLInputElement).value || '',
      preferredAppointmentDate: (document.getElementById('preferred-date') as HTMLInputElement).value || '',
      preferredAppointmentTime: (document.getElementById('preferred-time') as HTMLInputElement).value || '',
      preferredPractitioner: (document.getElementById('preferred-provider') as HTMLInputElement).value || '',
      preferredLocation: this.getSelectedLocation() || '',
      preferredLocation_other: '',
      additionalNotes: (document.getElementById('additional-notes') as HTMLTextAreaElement).value || '',
      submitted: true
    };

    // Build GraphQL mutation
    const mutation = {
      query: `mutation customFormSubmissionCreateOne($record: CreateOneCustomFormSubmissionInput!) {
        customFormSubmissionCreateOne(record: $record) {
          recordId
        }
      }`,
      variables: {
        record: {
          formId: '2AR49WMNpWRxWg8HP',
          formData: formData,
          organizationId: 'Zviufo9Bf4Fnqy7o2',
          qualified: true,
          formSubmissionType: 'default'
        }
      }
    };

    // Send request to GraphQL endpoint
    this.http.post('https://run-server.steerhealth.io/graphql', mutation).subscribe({
      next: (response: any) => {
        this.isSubmitting = false;
        this.successMessage = true;
        form.reset();
        this.clearErrors();
        setTimeout(() => {
          this.successMessage = false;
        }, 5000);
      },
      error: (error) => {
        this.isSubmitting = false;
        console.error('Form submission error:', error);
        this.validationErrors['submit'] = 'An error occurred while submitting the form. Please try again.';
      }
    });
  }

  private getSelectedLocation(): string {
    const virtualRadio = document.querySelector('input[name="location"][value="virtual"]') as HTMLInputElement;
    const inPersonRadio = document.querySelector('input[name="location"][value="in-person"]') as HTMLInputElement;

    if (virtualRadio && virtualRadio.checked) {
      return 'Virtual';
    } else if (inPersonRadio && inPersonRadio.checked) {
      return 'In Person';
    }
    return '';
  }

  clearErrors(): void {
    this.validationErrors = {};
  }
}
