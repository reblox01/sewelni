/* eslint-disable react/no-unescaped-entities */
import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to Sewelni!
        </h1>
        <p className="leading-normal text-muted-foreground">
          Sewelni is your ultimate chatbot, designed to understand {' '}
          and communicate in the rich and diverse dialects of Morocco better {' '}
          than any other AI, including ChatGPT. Whether you speak Darija, Amazigh, {' '}
          or any local slang, Sewelni is here to engage and assist you with {' '}
          unparalleled accuracy and cultural understanding.
        </p>
        <h1 className="text-lg font-semibold">Features</h1>
        <ul className="marker:text-white list-disc pl-5 space-y-3 text-muted-foreground">
          <li>Cultural Relevance: Understands Moroccan cultural references, idioms, and expressions.</li>{' '}
          <li>Programming Proficiency: Expert in various programming languages to assist with your coding needs.</li>{' '}
          <li>User-Friendly Interface: Easy to navigate for a smooth experience.</li>{' '}
          <li>Continuous Learning: Constantly evolving to adapt to new phrases and trends.</li>{' '}
        </ul>
      </div>
    </div>
  )
}
