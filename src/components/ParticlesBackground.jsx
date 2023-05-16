import React, { useCallback } from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import ParticlesConfig from './config/config-particles';
function ParticlesBackground() {
    const particlesInit = useCallback((engine)=>{
        loadFull(engine);
    }, []);
  return (
    <div>
        <Particles
        //id="tsparticles"
        options={ParticlesConfig}
        init={particlesInit}/>
    </div>
  )
}

export default ParticlesBackground