'use client'

import Particles from '@/components/Animate/Particles';

export default function ParticlesUI () {

      return (
            <>
                  <div
                        style={{
                              position: 'absolute', // Positioned relative to the parent div
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              zIndex: 1, // Ensure it's behind the content card
                              pointerEvents: 'none', // Allows interaction with elements on top
                        }}
                  >
                        <Particles
                              particleColors={['#ffffff', '#ffffff']}
                              particleCount={200}
                              particleSpread={12}
                              speed={0.2}
                              particleBaseSize={100}
                              moveParticlesOnHover={true}
                              alphaParticles={false}
                              disableRotation={false}
                       />
                  </div>
                  
            </>
      
      );
}