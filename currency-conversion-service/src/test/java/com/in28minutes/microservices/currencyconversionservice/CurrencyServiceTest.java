package com.in28minutes.microservices.currencyconversionservice;

import static org.junit.jupiter.api.Assertions.*;


import java.math.BigDecimal;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Test;


class CurrencyServiceTest {
	
	
	@Test
	void calculateConversionFeign() 
	{
	
		
		//given info
		String Usd,Inr;
		Usd="USD";Inr="INR";
		BigDecimal bg1 = new BigDecimal("10");
	
		 
		CurrencyService c=new CurrencyService();
		
		assertEquals(700,c.calculateConversionFeign(Usd,Inr,bg1));
		
		
		
		
	}

	
    }  
  




