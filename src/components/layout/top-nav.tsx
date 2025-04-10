import { Link } from 'react-router-dom'
import { IconMenu } from '@tabler/icons-react'
import { cn } from '../../lib/cn'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

interface TopNavProps extends React.HTMLAttributes<HTMLElement> {
  links: {
    title: string
    href: string
    isActive: boolean
    disabled?: boolean
  }[]
}

export function TopNav({ className, links, ...props }: TopNavProps) {
  return (
    <>
      <div className='md:hidden'>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button size='icon' variant='outline'>
              <IconMenu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side='bottom' align='start'>
            {links.map(({ title, href, isActive, disabled }) => (
              <DropdownMenuItem key={`${title}-${href}`} asChild>
                <Link to={href} className={cn(disabled && 'text-muted-foreground', isActive && 'text-primary')}>
                  {title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <nav className={cn('hidden items-center space-x-4 md:flex lg:space-x-6', className)} {...props}>
        {links.map(({ title, href, isActive, disabled }) => (
          <Link 
            key={`${title}-${href}`} 
            to={href} 
            className={cn(
              'text-sm font-medium transition-colors',
              isActive ? 'text-primary' : 'text-muted-foreground',
              !disabled && 'hover:text-primary',
              disabled && 'cursor-default'
            )}
          >
            {title}
          </Link>
        ))}
      </nav>
    </>
  );
}
