import React from 'react';
import { Button } from './primitives';
import { Navbar } from './index';
import { LockClosedIcon, LightningBoltIcon } from '@heroicons/react/solid';
export default function SignIn() {
  return (
    <div>
      <Navbar />
      <h1 className="font-extrabold text-4xl text-center m-8 leading-tight tracking-tighter">
        A production <br /> grade hangout <br /> platform.
      </h1>
      <div className="m-4 text-gray-500">
        <div className="text-center">
          <Button variant="primary" size="xl">
            Sign In
          </Button>
        </div>
        <div className="bg-white p-6 rounded-xl mt-16">
          <span className="p-2 bg-green-500 text-white rounded-full inline-block">
            <LockClosedIcon className="h-4" />
          </span>
          <h2 className="font-bold text-xl text-black">
            Enhanced Security
            <span className="text-green-500 font-black">.</span>
          </h2>
          <p className="mt-4">
            Our most secure platform yet. Uses 256-bit end-to-end encryption
            technology. While on sign in it uses 4-digit pin for local security.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl mt-8">
          <span className="p-2 bg-orange-500 text-white rounded-full inline-block">
            <LightningBoltIcon className="h-4" />
          </span>
          <h2 className="font-bold text-xl text-black">
            Even Faster
            <span className="text-orange-500 font-black">.</span>
          </h2>
          <p className="mt-4">
            This time, we've optimized React and stripped off many libraries
            that affect performance. Further, Tailwind CSS adds a blip to the
            mix. Changes are clearly visible.
          </p>
        </div>
      </div>
    </div>
  );
}
