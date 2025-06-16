import mariuszImage from '@/assets/images/people/mariuz.jpg';
import ramonImage from '@/assets/images/people/ramon.jpg';
import taylorImage from '@/assets/images/people/taylor.jpg';
import { Professional } from '@/lib/types/talents/professional';

export const sampleProfessionals: Professional[] = [
  {
    id: '1',
    name: 'Ramon Alberto V.',
    title: 'Audio Engineer',
    avatar: ramonImage,
    rating: 4.8,
    votes: 32324,
    endorsements: 124,
    bio: 'Experienced audio engineer working with top artists in the industry.',
    tags: ['Sound Mixing', 'Mastering', 'Studio Setup'],
    languages: ['English', 'Spanish'],
  },
  {
    id: '2',
    name: 'Mariusz O.',
    title: 'Musician',
    avatar: mariuszImage,
    rating: 4.8,
    votes: 32324,
    endorsements: 124,
    bio: 'Multi-instrumentalist and composer based in Berlin.',
    tags: ['Guitar', 'Composition', 'Live Performance'],
    languages: ['English', 'German', 'Polish'],
  },
  {
    id: '3',
    name: 'Taylor Jordan',
    title: 'Audio Engineer',
    avatar: taylorImage,
    rating: 4.8,
    votes: 32324,
    endorsements: 124,
    bio: 'Passionate about immersive soundscapes and high fidelity.',
    tags: ['Dolby Atmos', 'Recording', 'Editing'],
    languages: ['English'],
  },
];
