'use client'
import * as Toggle from '@radix-ui/react-toggle'
import { Moon, SunMoon } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ToggleTheme() {
  const { theme, setTheme } = useTheme()

  function handleTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  return (
    <Toggle.Root
      onClick={handleTheme}
      className="group flex w-full items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 dark:hover:bg-zinc-800"
      aria-label="Toggle italic"
    >
      {theme === 'light' ? (
        <>
          <Moon className="h-5 w-5  text-zinc-500" /> Dark Theme
        </>
      ) : (
        <>
          <SunMoon className="h-5 w-5  text-zinc-500" /> Light Theme
        </>
      )}
    </Toggle.Root>
  )
}
