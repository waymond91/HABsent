import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { Button, Row, Col, Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
mapboxgl.accessToken =
  "pk.eyJ1IjoiYnJldHRtc21pdGgiLCJhIjoiY2t1NzFxNGt2MW9pNDJ2bzZqdmlibWJoZSJ9.lorLL3V1xySe1Gm75RvdNQ";

export default function Home() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(55.5);
  const [lat, setLat] = useState(-4.5);
  const [zoom, setZoom] = useState(9);
  const [chl, setChl] = useState([]);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [lng, lat],
      zoom: zoom
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <Row>
      <Col>
        <div style={{ backgroundColor: "white", height: "100vh" }}>
          <nav class="navbar-custom ">
            <Navbar variant="dark">
              <Container>
                <Navbar.Brand href="#home">HABsent</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                  <Nav.Link href="/sign_in">Sign in</Nav.Link>
                  <Nav.Item>
                    <Button href="/sign_up" variant="light">
                      Sign up
                    </Button>
                  </Nav.Item>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </nav>
          <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
          <div ref={mapContainer} style={{ height: "90vh" }} />
        </div>
      </Col>
    </Row>
  );
}
