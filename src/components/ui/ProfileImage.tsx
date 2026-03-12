import { User } from 'lucide-react';
import profilePhoto from '../../assets/profile.jpg';

export function ProfileImage() {
    return (
          <img
                  src={profilePhoto}
                  alt="João Gabriel"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
        );
}

export function ProfileImageFallback() {
    return (
          <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-100 text-zinc-300">
                <User size={80} />
          </div>div>
        );
}</div>
