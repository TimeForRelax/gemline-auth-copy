import { ReactNode } from 'react';

import { ReactComponent as InstagramIcon } from '@assets/images/footer/instagram_icon.svg';
import { ReactComponent as XIcon } from '@assets/images/footer/x_icon.svg';
import { ReactComponent as TelegramIcon } from '@assets/images/footer/telegram_icon.svg';
import { ReactComponent as YouTubeIcon } from '@assets/images/footer/youtube_icon.svg';

export interface FooterLinks {
  link: string;
  icon: ReactNode;
}

export const footerLinksData: FooterLinks[] = [
  { link: 'https://www.instagram.com/', icon: <InstagramIcon /> },
  { link: '/', icon: <XIcon /> },
  { link: 'https://web.telegram.org/k/', icon: <TelegramIcon /> },
  { link: 'https://www.youtube.com/', icon: <YouTubeIcon /> },
];
