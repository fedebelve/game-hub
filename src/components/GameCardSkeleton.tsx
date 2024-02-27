import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

function GameCardSkeleton() {
  return (
    <Card>
        <Skeleton overflow={'hidden'} borderRadius={10} width={'300px'} height={'200px'} />
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton