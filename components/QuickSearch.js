import React, { useState } from 'react'
import { Link } from 'next/link'
import Box from '@mui/material/Box'

const QuickSearch = () => {
  return (
    <div>
      <h1>Quick Search</h1>
      <br />

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Link
          to={{
            pathname: `/search/TSLA`,
            state: { name: 'Tesla', symbol: 'TSLA' },
          }}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <button style={{ marginRight: '10px', borderRadius: '5px' }}>
            Tesla (TSLA)
          </button>
        </Link>

        <Link
          to={{
            pathname: `/search/DIS`,
            state: { name: 'Disney', symbol: 'DIS' },
          }}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <button style={{ marginRight: '10px', borderRadius: '5px' }}>
            Disney (DIS)
          </button>
        </Link>

        <Link
          to={{
            pathname: `/search/ZM`,
            state: { name: 'Zoom', symbol: 'ZM' },
          }}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <button style={{ marginRight: '10px', borderRadius: '5px' }}>
            Zoom (ZM)
          </button>
        </Link>
      </Box>
    </div>
  )
}
export default QuickSearch
