import React, { useState, useEffect } from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function UploadButtons() {
  const classes = useStyles();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const detectInfo = () => {
    fetch('http://localhost:2707/info-image?dir=123123').then(res => res.json()).then((res) => {
      console.log('\n--------\n', res, '\n--------\n');
    })
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        {selectedFile && (
          <Grid container spacing={4} justify="center">
            <Grid item xs={12} sm={6}>
              <img src={preview} width="100%" height="auto" alt="" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h6"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
                component="div"
              >
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    TÊN QUẢ
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="outlined" color="primary" onClick={detectInfo}>
                      Phân tích
                    </Button>
                  </Grid>
                </Grid>
              </Typography>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid item xs={12}>
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
          onChange={onSelectFile}
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera style={{ fontSize: "60px" }} />
          </IconButton>
        </label>
      </Grid>
    </Grid>
  );
}
