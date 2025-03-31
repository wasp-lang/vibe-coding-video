import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/button'

export default function ForbiddenError() {
  const navigate = useNavigate()
  return (
    <div className='h-svh'>
      <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
        <h1 className='text-[7rem] font-bold leading-tight'>403</h1>
        <span className='font-medium'>Access Forbidden</span>
        <p className='text-center text-muted-foreground'>
          You don't have necessary permission <br />
          to view this resource.
        </p>
        <div className='mt-6 flex gap-4'>
          <Button variant='outline' onClick={() => navigate(-1)}>
            Go Back
          </Button>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    </div>
  )
}
