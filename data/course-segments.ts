import { CourseSegment } from '@/types/content.types';

export const courseSegments: CourseSegment[] = [
  {
    id: 'segment-program',
    title: 'Program Specific',
    description: 'Certificate, Executive, and Post Graduate Certificate formats tailored for specific career transitions.',
    imageSrc: '/images/segment-program.webp',
    tags: ['Certificate', 'Executive', 'Post Graduate'],
  },
  {
    id: 'segment-industry',
    title: 'Industry Specific',
    description: 'Custom-fit learning tracks built for IT, Healthcare, Retail, Finance, Education, and Manufacturing sectors.',
    imageSrc: '/images/segment-industry.webp',
    tags: ['IT & Tech', 'Finance', 'Healthcare', 'Retail'],
  },
];
