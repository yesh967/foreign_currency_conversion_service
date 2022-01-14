package com.in28minutes.microservices.currencyconversionservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.math.BigDecimal;

@Service
public class CurrencyService {

    @Autowired
    private CurrencyExchangeProxy proxy;

    public  CurrencyConversion calculateConversionFeign(
            String from,
            String to,
            BigDecimal quantity
   ) {

    	
    	BigDecimal q=new BigDecimal("0");
    	
    	System.out.println(q.min(quantity));
    	

    	if(q.min(quantity)==quantity)
    	{
    		throw new IllegalStateException("Quantitative value is not valid , Please enter a positive Quantity");
    		
    	}
    	else
    	{
        CurrencyConversion currencyConversion = proxy.retrieveExchangeValue(from, to);

        return new CurrencyConversion(currencyConversion.getId(),
                from, to, quantity,
                currencyConversion.getConversionMultiple(),
                quantity.multiply(currencyConversion.getConversionMultiple()),
                currencyConversion.getEnvironment() + " " + "Instance");

    }
    
}
    
}
