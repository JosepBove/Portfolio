import PixelFiat from '../assets/work/web2/pixelfiat.png';
import Pi from '../assets/work/web2/pi.png';
import BadgeDescription,
{
  cSharp,
  unity,
  google,
  apple,
} from './badges';

interface Project {
  title: string,
  description: string,
  badges: BadgeDescription[],
  image: string,
}

const web2: Project[] = [
  {
    title: 'Pixel Fiat',
    description: 'Mobile incremental app where players progress by collecting pixel money',
    badges: [cSharp, unity, google, apple],
    image: PixelFiat,
  },
  {
    title: 'Memorize Pi',
    description: 'Mobile app to help users remember the digits of π through a minimalist interface',
    badges: [cSharp, unity, apple, google],
    image: Pi,
  },
];

export default web2;
