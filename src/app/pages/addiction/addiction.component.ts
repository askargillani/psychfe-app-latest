import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CtaComponent } from '../../components/cta/cta.component';

interface Symptom {
  title: string;
  description: string;
}

interface AddictionType {
  title: string;
  description: string;
}

@Component({
  selector: 'app-addiction',
  standalone: true,
  imports: [CommonModule, RouterModule, CtaComponent],
  templateUrl: './addiction.component.html',
  styleUrls: ['./addiction.component.scss']
})
export class AddictionComponent {
  symptoms: Symptom[] = [
    {
      title: 'Loss of Control',
      description: 'Unable to stop or control substance use or addictive behaviors despite wanting to'
    },
    {
      title: 'Tolerance',
      description: 'Needing more of the substance or behavior to achieve the same effect'
    },
    {
      title: 'Withdrawal Symptoms',
      description: 'Physical or emotional distress when unable to use the substance or engage in the behavior'
    },
    {
      title: 'Neglected Responsibilities',
      description: 'Failing to manage work, school, family, or social obligations due to substance use'
    },
    {
      title: 'Continued Use Despite Harm',
      description: 'Continuing despite knowing the negative consequences to health, relationships, or finances'
    },
    {
      title: 'Relationship Problems',
      description: 'Conflict with family, friends, or partners due to addiction'
    },
    {
      title: 'Health Complications',
      description: 'Physical health problems resulting from substance abuse or addictive behaviors'
    },
    {
      title: 'Mental Health Issues',
      description: 'Depression, anxiety, or other mental health conditions accompanying the addiction'
    }
  ];

  substanceAddictions: AddictionType[] = [
    { title: 'Alcohol', description: '' },
    { title: 'Caffeine', description: '' },
    { title: 'Cannabis (marijuana)', description: '' },
    { title: 'Hallucinogens', description: 'such as PCP and LSD' },
    { title: 'Hypnotics, sedatives and anxiolytics', description: 'such as sleeping pills, benzodiazepines and barbiturates' },
    { title: 'Inhalants', description: 'such as paint thinners, aerosol sprays, gases and nitrites (poppers)' },
    { title: 'Opioids', description: 'prescription and non-prescription, such as codeine, oxycodone and heroin' },
    { title: 'Stimulants', description: 'prescription and non-prescription, such as Adderall®, cocaine and methamphetamine' },
    { title: 'Tobacco/nicotine', description: 'such as smoking cigarettes and electronic cigarettes (e-cigarettes or vaping)' }
  ];

  behavioralAddictions: AddictionType[] = [
    { title: 'Gambling', description: '' },
    { title: 'Eating', description: '' },
    { title: 'Exercising or dieting', description: '' },
    { title: 'Shopping', description: '' },
    { title: 'Shoplifting or other risky behaviors', description: '' },
    { title: 'Having sex', description: '' },
    { title: 'Viewing pornography', description: '' },
    { title: 'Video gaming', description: 'Internet gaming disorder' },
    { title: 'Using the internet', description: 'such as on your phone or a computer' }
  ];
}
