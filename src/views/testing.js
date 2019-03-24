<div className="animated fadeIn">
  <Col xs="4">
    <div>
      <h5 className="text-center">Phoenix Trading Company LLC</h5><br/>
      <div className="text-center">
        <a href="#" className="btn btn-secondary" style={{marginRight:"10px"}}>Pep</a>
        <a className="btn btn-danger" data-target="#collapseExample">High Risk</a>
      </div>
      <br/><br/>
    </div>
  </Col>
  <Row>
    <Col xs="4">
      <ListGroup id="list-tab" role="tablist">
        <ListGroupItem onClick={() => this.toggle(0)} action active={this.state.activeTab === 0} >Personal Information and Documents</ListGroupItem>
        <ListGroupItem onClick={() => this.toggle(1)} action active={this.state.activeTab === 1} >Company Information</ListGroupItem>
        <ListGroupItem onClick={() => this.toggle(2)} action active={this.state.activeTab === 2} >Company Documents</ListGroupItem>
        <ListGroupItem onClick={() => this.toggle(3)} action active={this.state.activeTab === 3} >Partners Information and Documents
          <span><i className="fa fa-exclamation-circle fa-xlg mt-2 float-right" style={{color:"red"}}></i></span></ListGroupItem>
        <ListGroupItem onClick={() => this.toggle(4)} action active={this.state.activeTab === 4} >Transaction Information</ListGroupItem>
        <ListGroupItem onClick={() => this.toggle(5)} action active={this.state.activeTab === 5} >Buyers...</ListGroupItem>
        <ListGroupItem onClick={() => this.toggle(6)} action active={this.state.activeTab === 6} >Risk Profile</ListGroupItem>
        <ListGroupItem onClick={() => this.toggle(7)} action active={this.state.activeTab === 7} >Security Check</ListGroupItem>
      </ListGroup>
    </Col>
    <Col xs="8">
      <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId={3} >
          <div>
            <h5 className="text-center" style={{color:"red"}}>Fraudulence Detected</h5>
            <h6 className="text-center">Awaiting compliance approval</h6>
            <br/><br/>
          </div>
          {/*<p>Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt*/}
          {/*nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim*/}
          {/*tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip*/}
          {/*eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.</p>*/}
          <Col xs="6" style={{marginRight:"10px", marginLeft:"0px"}}>
            <Card className="card-accent-danger" style={{paddingRight:"0%"}}>
              <CardBody>
                <div className="card-header-actions">
                  <Badge color="success" className="float-right">1 reminders sent</Badge>
                </div>
                <div>
                  <span><i className="fa fa-home font-2xl mt-4"></i></span>
                  <span style={{marginLeft: "10px"}}>Phoenix Trading Company LLC</span>
                </div>
                <div>
                  <span><i className="fa fa-user icons font-2xl mt-4"></i></span>
                  <span style={{marginLeft: "10px"}}>Michael Adams, Elizabeth Thomas</span>
                </div>
              </CardBody>
              <CardFooter>
                <div className="text-center">
                  {/*eslint-disable-next-line*/}
                  <a href="#" className="btn btn-secondary" style={{marginRight:"10px"}}>Clear</a>
                  {/*eslint-disable-next-line*/}
                  <a className="btn btn-danger" data-target="#collapseExample">Decline</a>
                  {/*eslint-disable-next-line*/}
                  <a className="btn btn-info" style={{marginLeft:"10px"}}>Request for Information</a>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </TabPane>
        <TabPane tabId={1}>
          <p>Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia
            dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt
            anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum
            reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.</p>
        </TabPane>
        <TabPane tabId={2}>
          <p>Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris
            nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur
            est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et
            deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla
            laborum elit adipisicing pariatur cillum.</p>
        </TabPane>
        <TabPane tabId={0}>
          <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna
            sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore
            aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco
            nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor
            eiusmod eu pariatur culpa mollit in irure.</p>
        </TabPane>
        <TabPane tabId={4}>
          <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna
            sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore
            aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco
            nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor
            eiusmod eu pariatur culpa mollit in irure.</p>
        </TabPane>
        <TabPane tabId={5}>
          <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna
            sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore
            aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco
            nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor
            eiusmod eu pariatur culpa mollit in irure.</p>
        </TabPane>
        <TabPane tabId={6}>
          <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna
            sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore
            aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco
            nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor
            eiusmod eu pariatur culpa mollit in irure.</p>
        </TabPane>
        <TabPane tabId={7}>
          <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna
            sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore
            aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco
            nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor
            eiusmod eu pariatur culpa mollit in irure.</p>
        </TabPane>
      </TabContent>
    </Col>
  </Row>
</div>



<Card style={{width:"440px", border:"0", boxShadow:"4px 2px 33px 3px rgba(224,224,224,1)"}}>
<CardHeader style={{color:"405ba0"}}>
<div className="float-left">
  <median>Ename hit - <strong>Mohd Ali</strong></median><br/>
</div>
<div>
  <br/>
  <span><median className="float-left"> List - <strong>World check list</strong></median></span>
  <span className="float-right"><small><i>Listed on 25 Jan 2018</i></small></span>
</div>

</CardHeader>
<CardBody>
  <div>
    <p>Further Information</p>
  </div>
  <div>
    <p>Biography - Director of Sims medical center india private</p>
    <p>Identification - Director identification dismissed</p>
  </div><br/>
  <div>
                            <span>
                            <Button className="mr-1" color="secondary">Clear</Button>
                            <Button className="mr-1" color="danger">Decline</Button>
                            <Button className="mr-1" color="info">Request more Information</Button>
                          </span>
  </div>
</CardBody>
</Card>
