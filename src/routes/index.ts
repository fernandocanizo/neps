import { Router } from 'express'

const router = Router()

router.get('/ping', (_: any, res: any) => res.status(200).end())

export default router
