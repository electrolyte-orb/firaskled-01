import React from 'react';
import { Button } from './primitives';
import { Navbar } from './index';
import {
  LockClosedIcon,
  LightningBoltIcon,
  TerminalIcon,
} from '@heroicons/react/solid';
export default function SignIn() {
  return (
    <div>
      <Navbar />

      <h1 className="font-extrabold text-4xl text-center leading-tight m-8 tracking-tighter">
        <p className="font-normal tracking-widest uppercase text-xs mb-4">
          Meant for performance
        </p>
        A production <br /> grade hangout <br /> platform.
      </h1>
      <div className="text-center">
        <Button variant="primary" size="xl">
          Sign In
        </Button>
      </div>

      <div className="grid mt-16 border-t-2 border-b-2 border-gray-300 gap-0.5">
        <div className="bg-white p-6">
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

        <div className="bg-white p-6">
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

        <div className="bg-white p-6">
          <span className="p-2 bg-purple-500 text-white rounded-full inline-block">
            <TerminalIcon className="h-4" />
          </span>
          <h2 className="font-bold text-xl text-black">
            Fully Configurable
            <span className="text-purple-500 font-black">.</span>
          </h2>
          <p className="mt-4">
            This time, we've optimized React and stripped off many libraries
            that affect performance. Further, Tailwind CSS adds a blip to the
            mix. Changes are clearly visible.
          </p>
        </div>
      </div>

      <div className="p-4 border-t-2 bg-gray-200 border-gray-300 text-gray-600 mt-10 flex">
        <div className="w-full">
          <div>
            <p className="text-xs uppercase">A project by</p>
            <a
              href="https://github.com/electrolyte-orb"
              className="font-bold active:text-blue-500"
            >
              Electrolyte Orb
            </a>
          </div>
          <div>
            <a
              href="https://github.com/electrolyte-orb/firaskled-01"
              className="active:text-blue-500 mt-2 uppercase text-xs underline"
            >
              Checkout Source
            </a>
          </div>
        </div>

        <div>
          <a
            href="https://github.com/electrolyte-orb/firaskled-01"
            className="inline-grid bg-black focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-200 h-8 w-8 place-items-center rounded-full"
          >
            <img src="/GitHub-Mark-Light-32px.png" className="w-6" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
