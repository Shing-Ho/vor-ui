import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { useParams, useLocation } from "react-router-dom"
import { getRequestDetail } from "../api"

const useStyles = makeStyles({
  container: {
    padding: 10,
  },
  wrapper: {
    marginTop: 30,
  },
  overviewContainer: {
    padding: "32px 48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  separator: {
    borderRight: "1px solid rgba(128, 128, 128, 0.25)",
    height: "100px",
    marginRight: "48px",
    marginLeft: "48px",
  },
  overviewCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
  },
})

function RequestDetail() {
  const classes = useStyles()
  const location = useLocation()
  const id = location.pathname.split("/").reverse()[0]
  const [request, setRequest] = useState({
    keyHash: "",
    status: "",
    requestID: "",
    fee: "",
    seed: "",
    sender: "",
    requestBlockNo: "",
    requestBlockHash: "",
    fulfilledBlockNo: "",
    fulfilledBlockHash: "",
  })
  useEffect(() => {
    getRequestDetail(id).then((res) => {
      if (!res) return
      setRequest({
        keyHash: res.keyHash,
        status: res.RandomnessRequestFulfilled ? "Fulfilled" : "Request",
        requestID: res.requestID,
        fee: res.fee,
        seed: res.seed,
        sender: res.sender,
        requestBlockNo: res.blockNumber,
        requestBlockHash: res.blockHash,
        fulfilledBlockNo: res.RandomnessRequestFulfilled ? res.RandomnessRequestFulfilled.blockNumber : "",
        fulfilledBlockHash: res.RandomnessRequestFulfilled ? res.RandomnessRequestFulfilled.blockHash : "",
      })
    })
  }, [])

  return (
    <div className={classes.container}>
      <Paper elevation={1} className={classes.overviewContainer}>
        <div className={classes.overviewCard}>
          <Typography variant="h6">Key Hash</Typography>
          <Typography variant="subtitle1">{request.keyHash}</Typography>
        </div>
        <div className={classes.separator}></div>
        <div className={classes.overviewCard}>
          <Typography variant="h6">Status</Typography>
          <Typography variant="subtitle1">{request.status}</Typography>
        </div>
      </Paper>
      <Paper elevation={1} className={classes.overviewContainer}>
        <div className={classes.overviewCard}>
          <Typography variant="h6">Request ID</Typography>
          <Typography variant="subtitle1">{request.requestID}</Typography>
        </div>
        <div className={classes.separator}></div>
        <div className={classes.overviewCard}>
          <Typography variant="h6">Fee</Typography>
          <Typography variant="subtitle1">{request.fee}</Typography>
        </div>
      </Paper>
      <Paper elevation={1} className={classes.overviewContainer}>
        <div className={classes.overviewCard}>
          <Typography variant="h6">Seed</Typography>
          <Typography variant="subtitle1">{request.seed}</Typography>
        </div>
        <div className={classes.separator}></div>
        <div className={classes.overviewCard}>
          <Typography variant="h6">Sender</Typography>
          <Typography variant="subtitle1">{request.sender}</Typography>
        </div>
      </Paper>
      <Paper elevation={1} className={classes.overviewContainer}>
        <div className={classes.overviewCard}>
          <Typography variant="h6">Request Block #</Typography>
          <Typography variant="subtitle1">{request.requestBlockNo}</Typography>
        </div>
        <div className={classes.separator}></div>
        <div className={classes.overviewCard}>
          <Typography variant="h6">Request Block Hash</Typography>
          <Typography variant="subtitle1">{request.requestBlockHash}</Typography>
        </div>
      </Paper>
      <Paper elevation={1} className={classes.overviewContainer}>
        <div className={classes.overviewCard}>
          <Typography variant="h6">Fulfilled Block #</Typography>
          <Typography variant="subtitle1">{request.fulfilledBlockNo}</Typography>
        </div>
        <div className={classes.separator}></div>
        <div className={classes.overviewCard}>
          <Typography variant="h6">Fulfilled Block Hash</Typography>
          <Typography variant="subtitle1">{request.fulfilledBlockHash}</Typography>
        </div>
      </Paper>
    </div>
  )
}

export default RequestDetail
