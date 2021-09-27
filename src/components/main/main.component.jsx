/**
 * @fileOverview The main entry point to your standalone. Start editing here.
 */

import React from 'react'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/reset.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/site.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/segment.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/container.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/header.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/image.css'
import '@ta-interaktiv/semantic-ui/semantic/dist/components/list.css'
import './styles.scss'
import { TypescriptComponent } from 'components/typescriptExample'
import { Masthead } from '@ta-interaktiv/react-masthead'
import { Footer } from '@ta-interaktiv/react-footer'
import { ThemeSwitch } from '@ta-interaktiv/react-theme-switch'

// TODO Set the correct article ID here
const ARTICLE_ID = '00000000'

export function AppComponent() {
  return (
    <div className='index'>
      <Masthead articleId={ARTICLE_ID} />
      <ThemeSwitch />

      <header className='ui vertical  very fitted  segment'>
        <div className='ui container'>
          <div className='ui header'>
            <h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h1>
            <h2>
              Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
              Cras dapibus. Vivamus elementum semper nisi. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem.
            </h2>
          </div>
        </div>
      </header>

      <div className='ui vertical segment'>
        <div className='ui text container'>
          <div className='ta metainfo'>
            <div className='ta author'>Hans Muster</div>
            <div className='ta updated'>Aktualisiert am 31. XXXXXXX 2020</div>
          </div>
          <div className='ta text'>
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Aenean vulputate eleifend
            tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
            ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
            tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
            rutrum.
          </div>
        </div>
      </div>

      <Footer articleId={ARTICLE_ID} credits={[['Credits', 'go here']]} />
    </div>
  )
}
