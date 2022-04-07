App = {
  web3Provider: null,
  contracts: {},

  init: async function () {
    // Load Contribution Cards.
    $.getJSON("../contributions.json", function (data) {
      var contributionRow = $("#contributionsRow");
      var contributionTemplate = $("#contributionTemplate");

      for (i = 0; i < data.length; i++) {
        contributionTemplate.find(".panel-title").text(data[i].name);
        contributionTemplate.find("img").attr("src", data[i].picture);
        contributionTemplate.find("#contribution-description").text(data[i].description);
        contributionTemplate.find(".btn-contribute").attr("data-id", data[i].id);

        contributionRow.append(contributionTemplate.html());
      }
    });

    return await App.initWeb3();
  },

  initWeb3: async function () {
    // Modern dapp browsers...
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      try {
        // Request account access
        await window.ethereum.request({ method: "eth_requestAccounts" });
      } catch (error) {
        // User denied account access...
        console.error("User denied account access");
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = window.web3.currentProvider;
    }
    // If no injected web3 instance is detected, fall back to Ganache
    else {
      App.web3Provider = new Web3.providers.HttpProvider(
        "http://localhost:7545"
      );
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function () {
    $.getJSON('SendEther.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with @truffle/contract
      var SendEtherArtifact = data;
      App.contracts.SendEther = TruffleContract(SendEtherArtifact);
    
      // Set the provider for our contract
      App.contracts.SendEther.setProvider(App.web3Provider);
    
    });
    
    return App.bindEvents();
  },

  bindEvents: function () {
    $(document).on("click", ".btn-contribute", App.handleContribute);
    $(document).on("click", ".btn-add-contract", App.handleAddContract);
  },

  handleContribute: function (event) {
    event.preventDefault();
    var contributeButton = $(event.target);
    var contributionInput = contributeButton.parent().prev();

    var contributionId = parseInt(contributeButton.data("id"));
    var contribution = contributionInput.val() * 1000000000 * 1000000000;


    var sendEtherInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
    
      var account = accounts[0];
    
      App.contracts.SendEther.deployed().then(function(instance) {
        sendEtherInstance = instance;
    
        // Execute send ether as a transaction by sending account
        return sendEtherInstance.sendEther(contributionId, {from: account, value: contribution});
      }).then(function(result) {
        console.log(`RESULT: ${result}`)
      }).catch(function(err) {
        console.log(err.message);
      });
    });
    
  },

  handleAddContract: function (event){
    event.preventDefault();
    var contractId = $(event.target).parent().prev().val();
    var contractAddress = $(event.target).parent().prev().prev().prev().val();

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
    
      var account = accounts[0];
    
      App.contracts.SendEther.deployed().then(function(instance) {
        sendEtherInstance = instance;
    
        // Execute add contract as a transaction by sending account
        return sendEtherInstance.addContractAddresses(contractAddress, contractId, {from: account});
      }).then(function(result) {
        console.log(`RESULT: ${result}`)
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  }
};

$(function () {
  $(window).load(function () {
    App.init();
  });
});
