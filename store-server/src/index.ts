import Koa from 'koa'
import cors from '@koa/cors'
import json from 'koa-json'
import apiRounter from './api'
import {koaBody} from 'koa-body'
import loadFixtures from './fixtures'
import appConfig from './config'

const app = new Koa()

app.use(json())
app.use(cors())
app.use(koaBody())
app.use(apiRounter.routes())
app.listen(8000)

loadFixtures(appConfig.clearDataBeforeLoadingFixture)